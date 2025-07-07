import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert,
} from 'react-native';


import {ActivityMockData} from './src/mock-data/activity_mock_data';
import {PeopleMockData} from './src/mock-data/people_mock_data';
import {ActivityTemplatingModel} from './models/activity_model';
import {PeopleModel} from '@/models/people_model';
import UtilsTestPage from './src/pages/UtilsTestPage';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [activityModel, setActivityModel] =
    useState<ActivityTemplatingModel | null>(null);
  const [peopleModel, setPeopleModel] = useState<PeopleModel | null>(null);
  const [displayText, setDisplayText] = useState(
    'No data loaded yet. Click buttons to load mock data.',
  );
  const [showUtilsTestPage, setShowUtilsTestPage] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#121212' : '#F3F3F3',
  };

  const loadActivityModel = () => {
    try {
      const jsonString = ActivityMockData.getMockActivityJson();
      const jsonData = JSON.parse(jsonString);
      const model = jsonData as ActivityTemplatingModel;

      setActivityModel(model);
      setDisplayText(
        `Activity Model Loaded Successfully!\n\n` +
          `ID: ${model.id}\n` +
          `Type: ${model.type}\n` +
          `Actor: ${model.actor?.displayName}\n` +
          `Timestamp: ${new Date(
            model.timestamp ?? 0,
          ).toLocaleString()}\n` +
          `Activities Count: ${model.activities?.length ?? 0}\n` +
          `Profiles Count: ${Object.keys(model.profiles ?? {}).length}\n` +
          `Protocols Count: ${Object.keys(model.protocols ?? {}).length}\n` +
          `User Token PnL Count: ${model.userTokenPnl.length}\n` +
          `Category: ${model.category}\n` +
          `Action: ${model.action}`,
      );
    } catch (e: any) {
      setDisplayText(`Error loading Activity Model: ${e.message}`);
    }
  };

  const loadPeopleModel = () => {
    try {
      const jsonString = PeopleMockData.getMockPeopleJson();
      const jsonData = JSON.parse(jsonString);
      const model = jsonData as PeopleModel;

      setPeopleModel(model);
      setDisplayText(
        `People Model Loaded Successfully!\n\n` +
          `ID: ${model.id}\n` +
          `Type: ${model.type}\n` +
          `Display Name: ${model.displayName}\n` +
          `Username: ${model.username}\n` +
          `ENS Name: ${model.ensName}\n` +
          `Bio: ${model.bio}\n` +
          `Address: ${model.address}\n` +
          `Follower Count: ${model.followerCount?.displayValue}\n` +
          `Following Count: ${model.followingCount?.displayValue}\n` +
          `Verified: ${model.isVerified}\n` +
          `Is Token: ${model.isToken}\n` +
          `Is User Account: ${model.isUserAccount}\n` +
          `Net Worth: ${model.netWorth?.['_Any']?.totalUsdValue?.displayValue}\n` +
          `Profiles Count: ${Object.keys(model.profiles ?? {}).length}\n` +
          `Followers Count: ${model.followers?.length ?? 0}\n` +
          `Token Details: ${model.tokenDetails?.name}\n` +
          `Protocol Details: ${model.protocolDetails?.name}`,
      );
    } catch (e: any) {
      setDisplayText(`Error loading People Model: ${e.message}`);
    }
  };

  const clearData = () => {
    setActivityModel(null);
    setPeopleModel(null);
    setDisplayText('Data cleared. Click buttons to load mock data.');
  };

  if (showUtilsTestPage) {
    return <UtilsTestPage />;
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.title}>Load Mock Data</Text>
            <Button title="Load Activity Model" onPress={loadActivityModel} />
            <View style={{height: 8}} />
            <Button title="Load People Model" onPress={loadPeopleModel} />
            <View style={{height: 8}} />
            <Button title="Clear Data" onPress={clearData} color="#FF3B30" />
            <View style={{height: 8}} />
            <Button
              title="Test Utilities"
              onPress={() => setShowUtilsTestPage(true)}
              color="#FF9500"
            />
          </View>

          <View style={styles.statusContainer}>
            <View
              style={[
                styles.statusCard,
                {
                  backgroundColor: activityModel
                    ? '#D4EDDA'
                    : '#F8F9FA',
                },
              ]}>
              <Text
                style={{
                  color: activityModel ? '#155724' : '#6C757D',
                  fontSize: 24,
                }}>
                {activityModel ? '✓' : '✗'}
              </Text>
              <Text style={styles.statusText}>Activity Model</Text>
            </View>
            <View
              style={[
                styles.statusCard,
                {
                  backgroundColor: peopleModel ? '#D4EDDA' : '#F8F9FA',
                },
              ]}>
              <Text
                style={{
                  color: peopleModel ? '#155724' : '#6C757D',
                  fontSize: 24,
                }}>
                {peopleModel ? '✓' : '✗'}
              </Text>
              <Text style={styles.statusText}>People Model</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.title}>Model Data</Text>
            <ScrollView style={styles.displayBox}>
              <Text>{displayText}</Text>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  statusCard: {
    flex: 1,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  statusText: {
    fontSize: 12,
    marginTop: 4,
  },
  displayBox: {
    height: 200,
    padding: 8,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 4,
  },
});

export default App;