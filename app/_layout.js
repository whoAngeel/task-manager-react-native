import {
	ApplicationProvider,
	Layout as KittyLayout,
	Button,
	Text,
} from "@ui-kitten/components";
import Constants from "expo-constants";
// import { Text } from "react-native";
import { StyleSheet, View } from "react-native";
import * as eva from "@eva-design/eva";
import { Slot } from "expo-router";
import Navbar from "../components/NavBar";

export default function Layout() {
	return (
		<ApplicationProvider {...eva} theme={eva.light}>
			<KittyLayout style={{ flex: 1, paddingTop: Constants.statusBarHeight }}>
				<View className="flex-1 flex min-h-screen">
					<Slot />
				</View>
			</KittyLayout>
		</ApplicationProvider>
	);
}
