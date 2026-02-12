import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Clock, MoreVertical } from 'lucide-react-native';
import { Task } from '@/store/useTaskStore';

interface Props {
  
  task: Task;
  onPress: () => void;
}

const TaskCard = ({ task, onPress }: Props) => {
  return (
    <TouchableOpacity 
      onPress={onPress}
      activeOpacity={0.9}
      style={{ backgroundColor: task.color }} // Dynamique selon la catégorie
      className="p-6 rounded-[40px] mb-4 flex-row justify-between"
    >
      <View className="flex-1">
        {/* Badge Catégorie */}
        <View className="bg-white/20 self-start px-3 py-1 rounded-full mb-3">
          <Text className="text-black/70 text-[10px] font-bold uppercase tracking-widest">
            {task.category}
          </Text>
        </View>

        {/* Titre & Description */}
        <Text className="text-black text-2xl font-bold leading-7 mb-2">
          {task.text}
        </Text>
        <Text className="text-black/60 text-sm font-medium">
          {task.description || "Aucune description"}
        </Text>

        {/* Heure */}
        <View className="flex-row items-center mt-6">
          <Clock size={16} color="rgba(0,0,0,0.5)" />
          <Text className="text-black/50 text-xs font-bold ml-2">
            {task.startTime} — {task.endTime}
          </Text>
        </View>
      </View>

      {/* Bouton Option */}
      <TouchableOpacity className="bg-black/10 w-10 h-10 rounded-full items-center justify-center">
        <MoreVertical size={20} color="black" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default TaskCard;