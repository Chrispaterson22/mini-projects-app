import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const WelcomeScreen = ({ props, navigation }) => {
	return (
		<View>
			<Text>Welcome/Home Screen</Text>
			<Button
				title='Go To Projects'
				onPress={() => navigation.navigate('ProjectsList')}
			/>
			<Button
				title='Random Project'
				onPress={() => navigation.navigate('Project')}
			/>
		</View>
	)
}

export default WelcomeScreen

const styles = StyleSheet.create({})
