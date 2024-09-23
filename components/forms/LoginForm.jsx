import { Button, Icon, Input, Text } from "@ui-kitten/components";
import { Link } from "expo-router";
import { Formik } from "formik";
import { useState } from "react";
import { View, TextInput, Pressable, Text as RNText } from "react-native";
import * as Yup from "yup";
const LoginSchema = Yup.object().shape({
	email: Yup.string()
		.email("El correo no es válido")
		.required("El correo es un campo requerido"),
	password: Yup.string().required("La contraseña es un campo requerido"),
});

export const LoginForm = () => {
	const [secureTextEntry, setSecureTextEntry] = useState(true);
	const toggleSecure = () => setSecureTextEntry(!secureTextEntry);
	const renderIcon = () => {
		<Pressable onPress={toggleSecure}>
			<Icon name={secureTextEntry ? "eye-off" : "eye"} size={20}></Icon>
		</Pressable>;
	};

	return (
		<View className="flex min-h-screen items-center justify-center">
			<Text category="h3">Iniciar Sesión</Text>
			<Formik
				initialValues={{ email: "", password: "" }}
				validationSchema={LoginSchema}
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
					<View className="flex flex-col w-full gap-3 p-4">
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
							accessoryRight={renderIcon}
						/>
						{errors.password && touched.password ? (
							<Text status="danger">{errors.password}</Text>
						) : null}
						<Button onPress={handleSubmit}>Inicia Sesión</Button>
					</View>
				)}
			</Formik>
			<RNText>
				<Link href="/register">
					¿No tienes cuenta?{" "}
					<RNText className="text-blue-500 underline">
						Registrate Aquí
					</RNText>
				</Link>
			</RNText>
		</View>
	);
};
