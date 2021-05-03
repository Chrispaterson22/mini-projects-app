import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const ProjectsListScreen = ({ props, navigation }) => {
	return (
		<View>
			<Text>Projects List Screen</Text>
			<Button
				title='Go To Project'
				onPress={() => navigation.navigate('Project')}
			/>
		</View>
	)
}

export default ProjectsListScreen

const styles = StyleSheet.create({})
