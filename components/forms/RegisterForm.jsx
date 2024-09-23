import { Formik } from "formik";
import { Button, Input, Text } from "@ui-kitten/components";
import { View, TextInput, Pressable, Text as RNText } from "react-native";

import * as Yup from "yup";
import Icon from "react-native-vector-icons/Feather";
import { useState } from "react";
import { Link } from "expo-router";

const RegisterSchema = Yup.object().shape({
	name: Yup.string().required("El nombre es requerido"),
	email: Yup.string()
		.email("El correo no es válido")
		.required("El correo es un campo requerido"),
	password: Yup.string()
		.min(8, "La contraseña debe tener al menos 8 caracteres")
		.required("La contraseña es un campo requerido"),
});
export function RegisterForm() {
	const [secureTextEntry, setSecureTextEntry] = useState(true);
	const toggleSecure = () => setSecureTextEntry(!secureTextEntry);
	const renderIcon = () => {
		<Pressable onPress={toggleSecure}>
			<Icon name={secureTextEntry ? "eye-off" : "eye"} size={20}></Icon>
		</Pressable>;
	};
	return (
		<View className="flex min-h-screen items-center justify-center">
			<Text category="h3">Crea Una Cuenta</Text>
			<Formik
				initialValues={{ email: "", password: "", name: "" }}
				validationSchema={RegisterSchema}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{({
					handleChange,
					handleBlur,
					handleSubmit,
					values,
					errors,
					touched,
				}) => (
					<View className="flex	flex-col w-full gap-3 p-4">
						<Input
							label="Nombre"
							keyboardType="default"
							placeholder="John Doe"
							onChangeText={handleChange("name")}
							onBlur={handleBlur("name")}
							value={values.name}
							autoCapitalize="words"
						/>
						{errors.name && touched.name ? (
							<Text status="danger">{errors.name}</Text>
						) : null}
						<Input
							label={"Correo Electrónico"}
							keyboardType="email-address"
							onChangeText={handleChange("email")}
							value={values.email}
							onBlur={handleBlur("email")}
							placeholder="usuario@gmail.com"
						/>
						{errors.email && touched.email ? (
							<Text status="danger">{errors.email}</Text>
						) : null}

						<Input
							label="Contraseña"
							secureTextEntry={true}
							onChangeText={handleChange("password")}
							onBlur={handleBlur("password")}
							value={values.password}
							placeholder="**********"
							caption={
								"La contraseña debe tener al menos 8 caracteres"
							}
							accessoryRight={renderIcon}
						/>
						{errors.password && touched.password ? (
							<Text status="danger">{errors.password}</Text>
						) : null}

						<Button onPress={handleSubmit}>Registrarse</Button>
					</View>
				)}
			</Formik>
			<RNText>
				<Link href="/login">
					¿Ya tienes una cuenta?{" "}
					<RNText category="s1" className="text-blue-500 underline">
						Inicia Sesión Aquí
					</RNText>
				</Link>
			</RNText>
		</View>
	);
}
