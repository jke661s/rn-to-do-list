import { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalActive, setIsModalActive] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    const randomId = Math.random().toString();
    setCourseGoals(currentGoals => [...currentGoals, { id: randomId, value: enteredGoal }]);
    setIsModalActive(false);
  };

  const deleteGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goalId !== goal.id);
    });
  };

  return (
    <View style={styles.screen}>
      <Button title="Add a goal" onPress={() => setIsModalActive(true)} />
      <GoalInput isModalActive={isModalActive} addGoalHandler={addGoalHandler} onCancelTapped={() => setIsModalActive(false)} />
      <FlatList 
        keyExtractor={item => item.id}
        data={courseGoals} 
        renderItem={itemData => (
          <GoalItem id={itemData.item.id} onDelete={deleteGoalHandler} title={itemData.item.value} />
        )} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});