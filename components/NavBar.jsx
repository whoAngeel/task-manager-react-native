import React from "react";
import { StyleSheet, View } from "react-native";
import {
	Avatar,
	Button,
	Layout,
	MenuItem,
	OverflowMenu,
	Text,
	TopNavigation,
	TopNavigationAction,
} from "@ui-kitten/components";
import Icon from "react-native-vector-icons/Feather";
import { Link, useRouter } from "expo-router";

export const Navbar = () => {
	const [selectedIndex, setSelectedIndex] = React.useState(null);
	const [visible, setVisible] = React.useState(false);
	const router = useRouter();
	const toggleMenu = () => setVisible(!visible);

	const renderMenuAction = () => {
		return <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />;
	};
	const InfoIcon = () => <Icon fill="#8F9BB3" name="activity" size={26} />;
	const LogoutIcon = () => (
		<Icon fill="#8F9BB3" name="arrow-down-right" size={26} />
	);
	const MenuIcon = () => <Icon fill="#8F9BB3" name="menu" size={26} />;

	const renderOverflowMenuAction = () => (
		<OverflowMenu
			anchor={renderMenuAction}
			visible={visible}
			onBackdropPress={toggleMenu}
		>
			<MenuItem
				title={"Inicio de Sesión"}
				onPress={() => {
					setVisible(false);
					router.push("/login");
				}}
				accessoryLeft={InfoIcon}
			></MenuItem>
			<MenuItem
				title={"Registro"}
				accessoryLeft={InfoIcon}
				onPress={() => {
					setVisible(false);
					router.push("/register");
				}}
			/>
			<MenuItem title={"Logout"} accessoryLeft={LogoutIcon} />
		</OverflowMenu>
	);

	const renderTitle = () => (
		<View style={styles.titleContainer}>
			<Avatar style={styles.logo} source={require("../assets/logo.png")} />
			<Text category="h5">TaskMan</Text>
		</View>
	);
	return (
		<TopNavigation
			title={renderTitle}
			accessoryRight={renderOverflowMenuAction}
		/>
	);
};

const styles = StyleSheet.create({
	titleContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	logo: {
		marginHorizontal: 16,
	},
	icon: {
		width: 100,
		height: 100,
	},
});
