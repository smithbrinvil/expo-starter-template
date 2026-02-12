import React, { useState } from 'react'; // Ajoute useState
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  FlatList,
  StatusBar,
} from 'react-native';
import { format, addDays, startOfToday, isSameDay, eachDayOfInterval, startOfWeek } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Plus, Bell } from 'lucide-react-native';
import { useTaskStore, Task } from '@/store/useTaskStore';
import TaskCard from '@/components/ui/TaskCard'; // Import du composant créé précédemment
import AddTaskModal from '@/components/ui/AddTaskModal';

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false); // État pour la modal
  // 1. Récupération des données du store
  const { tasks, selectedDate, setSelectedDate } = useTaskStore();

  // 2. Filtrage des tâches pour le jour sélectionné
  const filteredTasks = tasks.filter((t) => t.date === selectedDate);

  // 3. Génération des jours de la semaine (7 jours à partir de lundi dernier)
  const startDate = startOfWeek(new Date(), { weekStartsOn: 1 });
  const weekDays = eachDayOfInterval({
    start: startDate,
    end: addDays(startDate, 6),
  });

  return (
    <SafeAreaView className="flex-1 bg-[#0F0F0F]">
      <StatusBar barStyle="light-content" />
      
      <View className="flex-1 px-6 pt-4">
        
        {/* --- HEADER --- */}
        <View className="flex-row justify-between items-center mb-8">
          <View>
            <Text className="text-gray-500 text-sm font-medium">Jeudi, 12 Février</Text>
            <Text className="text-white text-3xl font-bold tracking-tight">Salut, Smith 👋</Text>
          </View>
          <TouchableOpacity className="w-12 h-12 rounded-2xl bg-[#1A1A1A] items-center justify-center border border-white/5">
            <Bell size={22} color="white" />
          </TouchableOpacity>
        </View>

        {/* --- CALENDRIER HORIZONTAL --- */}
        <View className="mb-10">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {weekDays.map((day, index) => {
              const dateString = day.toISOString().split('T')[0];
              const isSelected = dateString === selectedDate;
              const isToday = isSameDay(day, new Date());

              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => setSelectedDate(dateString)}
                  activeOpacity={0.8}
                  className={`items-center justify-center w-16 h-24 rounded-[32px] mr-4 border ${
                    isSelected 
                    ? 'bg-[#C2F52C] border-[#C2F52C]' 
                    : 'bg-[#1A1A1A] border-white/5'
                  }`}
                >
                  <Text className={`text-[10px] uppercase font-bold tracking-widest ${
                    isSelected ? 'text-black' : 'text-gray-500'
                  }`}>
                    {format(day, 'EEE', { locale: fr }).replace('.', '')}
                  </Text>
                  <Text className={`text-2xl font-black mt-1 ${
                    isSelected ? 'text-black' : 'text-white'
                  }`}>
                    {format(day, 'd')}
                  </Text>
                  {isToday && !isSelected && (
                    <View className="w-1 h-1 bg-[#C2F52C] rounded-full mt-1" />
                  )}
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* --- LISTE DES TÂCHES --- */}
        <View className="flex-1">
          <View className="flex-row justify-between items-end mb-6">
            <View>
              <Text className="text-white text-xl font-bold">Ton Programme</Text>
              <Text className="text-gray-500 text-sm">
                {filteredTasks.length} {filteredTasks.length > 1 ? 'tâches prévues' : 'tâche prévue'}
              </Text>
            </View>
            <TouchableOpacity>
              <Text className="text-[#C2F52C] font-semibold">Voir tout</Text>
            </TouchableOpacity>
          </View>

          {filteredTasks.length > 0 ? (
            <FlatList
              data={filteredTasks}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TaskCard 
                  task={item} 
                  onPress={() => console.log('Éditer la tâche', item.id)} 
                />
              )}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 100 }}
            />
          ) : (
            <View className="flex-1 justify-center items-center opacity-20">
              <Text className="text-white text-lg font-medium text-center">
                Rien de prévu pour ce jour.{"\n"}Prends du temps pour toi.
              </Text>
            </View>
          )}
        </View>
      </View>

     {/* Bouton Flottant modifié */}
      <View className="absolute bottom-10 left-0 right-0 items-center">
        <TouchableOpacity 
          activeOpacity={0.9}
          className="bg-[#C2F52C] w-16 h-16 rounded-full items-center justify-center shadow-2xl"
          onPress={() => setModalVisible(true)} // Ouvre la modal
        >
          <Plus size={32} color="black" strokeWidth={3} />
        </TouchableOpacity>
      </View>

      {/* Ajout de la Modal */}
      <AddTaskModal 
        isVisible={modalVisible} 
        onClose={() => setModalVisible(false)} 
      />
    </SafeAreaView>
  );
};

export default HomeScreen;