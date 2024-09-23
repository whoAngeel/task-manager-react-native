import React from "react";
import { StyleSheet, View } from "react-native";
import {
	Avatar,
	Icon,
	MenuItem,
	OverflowMenu,
	Text,
	TopNavigation,
	TopNavigationAction,
} from "@ui-kitten/components";

export const Navbar = () => {
	return (
		<View className="w-full h-16 flex-row justify-between items-center bg-purple-300 px-4">
			<Text category="h4" className="font-bold text-black">
				Task Manager
			</Text>
			<Avatar
				source={require("../assets/icon.png")}
				style={{ width: 40, height: 40 }}
			/>
		</View>
	);
};
