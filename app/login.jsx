import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import Icon from '../assets/icons'
import BackButton from '../components/BackButton'
import { StatusBar } from 'expo-status-bar'
import { useRouter } from 'expo-router'
import { hp, wp } from '../helpers/common'
import { theme } from '../constants/theme'
import Input from '../components/Input'
import Button from '../components/Button'

const Login = () => {
    const router = useRouter();
    const emailRef = useRef("")
    const passwordRef = useRef("")
    const [loading, setLoading] = useState(false)



    const onSubmit = async () => {
        if (!emailRef.current || !passwordRef.current) {
            Alert.alert('Login', 'Please fill all the fields!');
            return;
        }

        let email = emailRef.current.trim();
        let password = passwordRef.current.trim();

        setLoading(true);
        console.log('error', error);
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        setLoading(false);
        if (error) {
            Alert.alert('Ligin', error.message);
        }

    }
    return (
        <ScreenWrapper>
            <StatusBar style='dark' />
            <View style={styles.container}>
                <BackButton router={router} />

                {/* welcome */}
                <View>
                    <Text style={styles.welcomeText}>Hey,</Text>
                    <Text style={styles.welcomeText}>Welcome Back</Text>
                </View>

                {/* form */}
                <View style={styles.form}>
                    <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
                        Please login to continue
                    </Text>
                    <Input
                        icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
                        placeholder='Enter your email'
                        onChangeText={value => emailRef.current = value}
                    />
                    <Input
                        icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
                        placeholder='Enter your password'
                        secureTextEntry
                        onChangeText={value => passwordRef.current = value}
                    />
                    <Text style={styles.forgotPassword}>
                        forgot Password?
                    </Text>
                    <Button title={'Login'} loading={loading} onPress={onSubmit} />

                    {/* footer */}
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>
                            Don't have an account?
                        </Text>
                        <Pressable onPress={() => router.push('signUp')}>
                            <Text style={[styles.footerText, { color: theme.colors.primaryDark, fontWeight: theme.fonts.semibold }]}>
                                Sign Up
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 45,
        paddingHorizontal: wp(5),
    },
    welcomeText: {
        fontSize: hp(4),
        fontWeight: theme.fonts.bold,
        color: theme.colors.text,
    },
    form: {
        gap: 25,
    },
    forgotPassword: {
        textAlign: 'right',
        fontWeight: theme.fonts.semiBold,
        color: theme.colors.text,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    footerText: {
        textAlign: 'center',
        color: theme.colors.text,
        fontSize: hp(1.6),
    },
})