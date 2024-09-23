import {
	Button,
	Layout,
	Text,
	TopNavigation,
	TopNavigationAction,
} from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import { Navbar } from "../components/NavBar";

function index() {
	return (
		<View className="flex flex-1 min-h-screen">
			<Navbar />
			<View className="flex-1 flex justify-center items-center ">
				<Text category="h4">Welcome to TaskManager</Text>
				<Button onPress={() => console.log("Login")}>Login</Button>
				<Text category="h4">Welcome to TaskManager</Text>
				{/* <Button onPress={() => console.log("Login")}>Login</Button> */}
			</View>
		</View>
	);
}

export default index;
