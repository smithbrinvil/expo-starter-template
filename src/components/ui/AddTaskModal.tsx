import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, KeyboardAvoidingView, Platform } from 'react-native';
import { X, Clock, Tag } from 'lucide-react-native';
import { useTaskStore, Category } from '@/store/useTaskStore';

interface Props {
    isVisible: boolean;
    onClose: () => void;
}

const CATEGORIES: { label: Category; color: string }[] = [
    { label: 'Design', color: '#C2F52C' },
    { label: 'Work', color: '#D1C4E9' },
    { label: 'Health', color: '#FFAB91' },
    { label: 'Personal', color: '#81D4FA' },
];

const AddTaskModal = ({ isVisible, onClose }: Props) => {
    const { addTask, selectedDate } = useTaskStore();

    const [text, setText] = useState('');
    const [category, setCategory] = useState<Category>('Design');
    const [color, setColor] = useState('#C2F52C');
    const [startTime, setStartTime] = useState('09:00');
    const [endTime, setEndTime] = useState('10:00');
    const [description, setDescription] = useState('');

    const handleSave = () => {
        if (!text.trim()) return;

        addTask({
            text,
            category,
            color,
            startTime,
            endTime,
            date: selectedDate,
            description: '', // Optionnel : Ajouter un champ de description dans la modal si besoin
        });

        // Reset et fermeture
        setText('');
        onClose();
    };

    return (
        <Modal visible={isVisible} animationType="fade" transparent>
            {/* 1. L'OVERLAY (Fond noir semi-transparent) */}
            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)' }} className="justify-center items-center">
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Permet de gérer le clavier sur iOS et Android
                    className="flex-1 justify-center items-center bg-black/60" // Fond semi-transparent pour la modal
                    style={{ width: '100%' }}
                >
                    <View className="bg-[#1A1A1A] rounded-[40px] p-8 border border-white/10" style={{ marginBottom: 32, padding: 16, borderRadius: 12, width: '90%', maxWidth: 400 }}>
                        {/* Header Modal */}
                        <View className="flex-row justify-between items-center mb-8" >
                            <Text className="text-white text-2xl font-bold">Nouvelle Priorité</Text>
                            <TouchableOpacity onPress={onClose} className="bg-white/5 p-2 rounded-full">
                                <X size={24} color="white" />
                            </TouchableOpacity>
                        </View>

                        {/* Input Titre */}
                        <View className="mb-6">
                            <Text style={{ color: '#888', fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: 10 }}>Titre de la tâche</Text>
                            <TextInput
                                placeholder="Ex: Design du Dashboard"
                                placeholderTextColor="#444"
                                value={text}
                                onChangeText={setText}
                               
                                style={{ padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#333' }}
                            />
                        </View>

                        {/* Sélection Catégorie */}
                        <View className="mb-6">
                            <Text style={{ color: '#888', fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: 10 }}>Catégorie</Text>
                            <View className="flex-row justify-between">
                                {CATEGORIES.map((cat) => (
                                    <TouchableOpacity
                                        key={cat.label}
                                        onPress={() => { setCategory(cat.label); setColor(cat.color); }}
                                        style={{ backgroundColor: category === cat.label ? cat.color : '#252525', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8 }}
                                        className="px-4 py-2 rounded-xl"
                                    >
                                        <Text className={`font-bold text-[12px] ${category === cat.label ? 'text-black' : 'text-gray-400'}`}>
                                            {cat.label}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>

                         {/* Input Description */}
                        <View className="mb-6">
                            <Text style={{ color: '#888', fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: 10 }}>Déscription de la tâche</Text>
                            <TextInput
                                placeholder="Ex: Créer les maquettes pour le nouveau dashboard d'analyse"
                                placeholderTextColor="#444"
                                value={description}
                                onChangeText={setDescription}
                                multiline
                                style={{ padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#333' }}
                            />
                        </View>

                        {/* Heures (Simplifié pour le MVP) */}
                        <View className="flex-row space-x-4 mb-10" style={{ gap: 16 }}>
                            <View className="flex-1">
                                <Text style={{ color: '#888', fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: 10 }}>Début</Text>
                                <TextInput
                                    value={startTime}
                                    onChangeText={setStartTime}
                                    style={{ backgroundColor: '#252525', padding: 16, borderRadius: 16, color: 'white', textAlign: 'center', fontWeight: 'bold' }}
                                />
                            </View>
                            <View className="flex-1">
                                <Text style={{ color: '#888', fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: 10 }}>Fin</Text>
                                <TextInput
                                    value={endTime}
                                    onChangeText={setEndTime}
                                    style={{ backgroundColor: '#252525', padding: 16, borderRadius: 16, color: 'white', textAlign: 'center', fontWeight: 'bold' }}
                                />
                            </View>
                        </View>

                        
                        {/* Bouton Créer */}
                        <TouchableOpacity
                            onPress={handleSave}
                            activeOpacity={0.8}
                            className="bg-[#C2F52C] p-6 rounded-[24px] items-center"
                        >
                            <Text className="text-black text-lg font-black uppercase tracking-tighter">Créer la tâche</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </Modal>
    );
};

export default AddTaskModal;