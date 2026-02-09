import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

// Simulation de données (Mock data)
const TRANSACTIONS = [
  { id: '1', title: 'Adobe Creative Cloud', date: '12 Fév', amount: '-$52.99', category: 'Design' },
  { id: '2', title: 'Transfert de Juks Graphic', date: '10 Fév', amount: '+$1,250.00', category: 'Revenu' },
  { id: '3', title: 'Starbucks Coffee', date: '09 Fév', amount: '-$6.50', category: 'Food' },
  { id: '4', title: 'GitHub Pro', date: '08 Fév', amount: '-$7.00', category: 'DevTools' },
  { id: '5', title: 'Transfert de Juks Graphic', date: '05 Fév', amount: '+$1,250.00', category: 'Revenu' },
  { id: '6', title: 'Spotify Premium', date: '03 Fév', amount: '-$9.99', category: 'Entertainment' },
  { id: '7', title: 'Amazon Purchase', date: '01 Fév', amount: '-$120.45', category: 'Shopping' },
  { id: '8', title: 'Transfert de Juks Graphic', date: '28 Jan', amount: '+$1,250.00', category: 'Revenu' },
  { id: '9', title: 'Netflix Subscription', date: '27 Jan', amount: '-$15.99', category: 'Entertainment' },
];

export default function PaymentHome() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header - Solde Principal */}
      <View style={styles.header}>
        <Text style={styles.headerSubtitle}>Solde total</Text>
        <Text style={styles.balance}>$4,560.85</Text>
        
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.mainButton}>
            <Text style={styles.buttonText}>Envoyer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.mainButton, styles.secondaryButton]}>
            <Text style={styles.buttonText}>Recevoir</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Liste des Transactions */}
      <View style={styles.content}>
        <View style={styles.sectionTitleRow}>
          <Text style={styles.sectionTitle}>Activités récentes</Text>
          <TouchableOpacity><Text style={styles.seeAll}>Voir tout</Text></TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {TRANSACTIONS.map((item) => (
            <View key={item.id} style={styles.transactionCard}>
              <View style={styles.transactionIcon} />
              <View style={styles.transactionInfo}>
                <Text style={styles.transactionTitle}>{item.title}</Text>
                <Text style={styles.transactionDate}>{item.date} • {item.category}</Text>
              </View>
              <Text style={[
                styles.transactionAmount, 
                { color: item.amount.includes('+') ? '#2ecc71' : '#1A1A1A' }
              ]}>
                {item.amount}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E293B', // Fond sombre pour le header
  },
  header: {
    padding: 24,
    paddingBottom: 40,
    alignItems: 'center',
  },
  headerSubtitle: {
    color: '#94A3B8',
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  balance: {
    color: '#FFFFFF',
    fontSize: 42,
    fontWeight: '800',
    marginVertical: 10,
  },
  actionRow: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 12,
  },
  mainButton: {
    backgroundColor: '#3B82F6',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 25,
  },
  secondaryButton: {
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  content: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 24,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  seeAll: {
    color: '#3B82F6',
    fontWeight: '600',
  },
  transactionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    // Ombre légère
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  transactionIcon: {
    width: 45,
    height: 45,
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
  },
  transactionInfo: {
    flex: 1,
    marginLeft: 12,
  },
  transactionTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#1E293B',
  },
  transactionDate: {
    color: '#64748B',
    fontSize: 12,
    marginTop: 2,
  },
  transactionAmount: {
    fontWeight: '700',
    fontSize: 15,
  },
});