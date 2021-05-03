import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import WelcomeScreen from '../screens/WelcomeScreen'
import ProjectsListScreen from '../screens/ProjectsListScreen'
import ProjectScreen from '../screens/ProjectScreen'

const AppStackNavigator = createStackNavigator()

const AppNavigator = () => {
	return (
		<NavigationContainer>
			<AppStackNavigator.Navigator>
				<AppStackNavigator.Screen
					name='Welcome'
					component={WelcomeScreen}
					options={{ title: '50 Mini Projects' }}
				/>
				<AppStackNavigator.Screen
					name='ProjectsList'
					component={ProjectsListScreen}
					options={{ title: 'Projects' }}
				/>
				<AppStackNavigator.Screen
					name='Project'
					component={ProjectScreen}
					options={{ title: 'Name of Project - Dynamic' }}
				/>
			</AppStackNavigator.Navigator>
		</NavigationContainer>
	)
}

export default AppNavigator
