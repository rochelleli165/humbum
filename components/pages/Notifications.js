
import React, {useState} from 'react';
import { StyleSheet, Text, View , ScrollView, Switch, Dimensions} from 'react-native';
import Card from '../Card';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'
import AnswerCard from '../AnswerCard';

function Notifications() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const line = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
          strokeWidth: 2, // optional
        },
      ],
    };
  
    return (
      <View style={styles.container}>
        <AnswerCard></AnswerCard>

        <View></View>
        <Text style={styles.title}>Anything that notified you, will be here!</Text>
        
        <View style={styles.switchcontainer}>
          <Text style={styles.turnontext}>Turn on notifications?</Text>
        
      
          <Switch
          trackColor={{false: '#767577', true: '#e4cee0'}}
          thumbColor={isEnabled ? '#84a6d' : '#a15d98'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={styles.switch}
          />
        
        </View>
       
        <View style={styles.graphcontainer}>
          <Text style={styles.heading}>
            Bezier Line Chart
          </Text>
          <LineChart
            data={line}
            width={Dimensions.get("window").width * 0.95} // from react-native
            height={220}
            yAxisLabel={'$'}
            chartConfig={{
              backgroundColor: '#e4cee0',
              backgroundGradientFrom: '#84a6d6',
              backgroundGradientTo: '#4382bb',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                padding: 10,
              }
            }}
            bezier
            style={{
              alginItems: 'center',
              marginVertical: 8,
              borderRadius: 10,
            }}
          />
        </View>

        
      </View>
    );

    
  }

const styles = StyleSheet.create({
container: {
    backgroundColor: '#ddf2f4'
},
switchcontainer: {
  margin: 10,
  height: 50,
  backgroundColor: '#4382bb',
  borderRadius: 10,
  flexDirection: 'row',
  alignItems: 'center',
},
turnontext: {
  marginLeft: 10,
  marginRight: 215,
  color: 'white',
  fontSize: 12,
  fontWeight: '500'
},
title: {
  margin: 10,
  fontSize: 30,
  color: '#a15d98',
  fontWeight: '700',
  textAlign: 'center',
},
heading: {
  margin: 5,
  fontSize: 20,
  color: '#a15d98',
  fontWeight: '600',
},
switch: {
  padding: 10,
},
graphcontainer: {
  margin: 10,
}
});

export default Notifications;