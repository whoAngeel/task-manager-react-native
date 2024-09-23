import * as eva from "@eva-design/eva";
import React from "react";
import icon from "./assets/icon.png";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
const HomeScreen = () => (
	<Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
		<Text category="h2" className="text-red-500">
			HOME
		</Text>
	</Layout>
);
export default function App() {
	return (
		<ApplicationProvider {...eva} theme={eva.light}>
			<HomeScreen />
		</ApplicationProvider>
	);
}
