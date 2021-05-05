import React from 'react'
import {
	Image,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	ImageBackground,
} from 'react-native'

const data = [
	{
		id: '1',
		bgImg: {
			uri:
				'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
		},
		caption: 'Explore the World',
		bgColor: 'red',
	},
	{
		id: '2',
		bgImg: {
			uri:
				'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
		},
		caption: 'Wild Forest',
		bgColor: 'yellow',
	},
	{
		id: '3',
		bgImg: {
			uri:
				'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
		},
		caption: 'Sunny Beach',
		bgColor: 'orange',
	},
	{
		id: '4',
		bgImg: {
			uri:
				'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
		},
		caption: 'City in Winter',
		bgColor: 'blue',
	},
	{
		id: '5',
		bgImg: {
			uri:
				'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
		},
		caption: 'Mountains - Clouds',
		bgColor: 'white',
	},
]

const ExpandingCards = () => {
	return (
		<View style={styles.container}>
			{data.map(({ bgImg, id, caption, bgColor }, index) => {
				return (
					<TouchableOpacity
						key={id}
						onPress={() => {}}
						style={styles.cardContainer}
						activeOpacity={0.9}
					>
						<View style={[styles.card, { backgroundColor: bgColor }]}>
							<Text style={styles.imgCaption}>{caption}</Text>
						</View>
					</TouchableOpacity>
				)
			})}
		</View>
	)
}

export default ExpandingCards

const styles = StyleSheet.create({})
