import { View, Text } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ScreenWrapper = ({ children }) => {
    const { top } = useSafeAreaInsets();
    const paddingTop = top > 0 ? top + 5 : 30;
    const bg = '#ffffff'; 

    return (
        <View style={{ flex: 1, paddingTop: paddingTop, backgroundColor: bg }}>
            {children}
        </View>
    );
};

export default ScreenWrapper;