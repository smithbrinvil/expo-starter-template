import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Types pour la structure des tâches
export type Category = 'Work' | 'Design' | 'Health' | 'Personal';

export type Task = {
  id: string;
  text: string;
  description?: string;
  startTime: string;
  endTime: string;
  category: Category;
  color: string;
  completed: boolean;
  date: string; // Format YYYY-MM-DD pour lier la tâche à un jour précis
};

interface TaskState {
  tasks: Task[];
  selectedDate: string;
  // Actions
  setSelectedDate: (date: string) => void;
  addTask: (task: Omit<Task, 'id' | 'completed'>) => void;
  toggleTask: (id: string) => void;
  removeTask: (id: string) => void;
  updateTask: (id: string, updatedFields: Partial<Task>) => void;
  resetDaily: () => void;
}

export const useTaskStore = create<TaskState>()(
  persist(
    (set, get) => ({
      // État initial
      tasks: [],
      selectedDate: new Date().toISOString().split('T')[0],

      // Changer la date sélectionnée dans le calendrier
      setSelectedDate: (date) => set({ selectedDate: date }),

      // Ajouter une tâche avec un ID unique
      addTask: (newTask) => {
        const tasks = get().tasks;
        // Optionnel : Garder la limite de 3 tâches par jour pour respecter le concept "Trio"
        const tasksForDate = tasks.filter(t => t.date === newTask.date);
        if (tasksForDate.length >= 3) return;

        const taskWithId: Task = {
          ...newTask,
          id: Date.now().toString(),
          completed: false,
        };

        set({ tasks: [...tasks, taskWithId] });
      },

      // Inverser le statut complété/non complété
      toggleTask: (id) => {
        set({
          tasks: get().tasks.map((t) =>
            t.id === id ? { ...t, completed: !t.completed } : t
          ),
        });
      },

      // Supprimer une tâche
      removeTask: (id) => {
        set({
          tasks: get().tasks.filter((t) => t.id !== id),
        });
      },

      // Modifier une tâche existante (pour les changements de texte, heure, etc.)
      updateTask: (id, updatedFields) => {
        set({
          tasks: get().tasks.map((t) =>
            t.id === id ? { ...t, ...updatedFields } : t
          ),
        });
      },

      // Tout effacer (pour le développement ou remise à zéro)
      resetDaily: () => set({ tasks: [] }),
    }),
    {
      name: 'trio-storage', // Nom de la clé dans AsyncStorage
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);