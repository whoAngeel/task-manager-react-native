import React from "react";
import { View, StyleSheet } from "react-native";
import {
	Avatar,
	Icon,
	MenuItem,
	OverflowMenu,
	TopNavigation,
	TopNavigationAction,
} from "@ui-kitten/components";

// Icono de menú (tres puntos verticales)
const MenuIcon = (props) => <Icon {...props} name="more-vertical" />;

const LogoutIcon = (props) => <Icon {...props} name="log-out" />;
const SettingsIcon = (props) => <Icon {...props} name="settings" />;

export const AvatarDropdown = ({ onLogout, onNavigateToSettings }) => {
	const [menuVisible, setMenuVisible] = React.useState(false);

	// Función para mostrar/ocultar el menú
	const toggleMenu = () => setMenuVisible(!menuVisible);

	// Acción del avatar que muestra el menú
	const renderMenuAction = () => (
		<TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
	);

	// Menú desplegable
	const renderOverflowMenuAction = () => (
		<OverflowMenu
			anchor={renderMenuAction} // Anchor es el botón que dispara el menú
			visible={menuVisible}
			onBackdropPress={toggleMenu}
		>
			<MenuItem
				accessoryLeft={SettingsIcon}
				title="Settings"
				onPress={() => {
					toggleMenu();
					onNavigateToSettings(); // Navega a la configuración
				}}
			/>
			<MenuItem
				accessoryLeft={LogoutIcon}
				title="Logout"
				onPress={() => {
					toggleMenu();
					onLogout(); // Llama la función de logout
				}}
			/>
		</OverflowMenu>
	);

	return (
		<View style={styles.container}>
			{/* Barra superior con el avatar y el menú */}
			<TopNavigation
				title="Task Manager"
				alignment="center"
				accessoryRight={renderOverflowMenuAction} // Aquí ponemos el menú en el lado derecho
			/>
		</View>
	);
};

// Estilos para el componente
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
