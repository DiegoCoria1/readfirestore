import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig'; // Asegúrate de tener correctamente configurado Firebase

const App = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Referencia al documento específico
                const docRef = doc(db, 'User', 'userInfo');
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    // Guardar los datos en el estado
                    setUserData(docSnap.data());
                } else {
                    console.log('El documento no existe.');
                }
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Cargando datos...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {userData ? (
                <>
                    <Text style={styles.label}>Nombre:</Text>
                    <Text style={styles.value}>{userData.name}</Text>

                    <Text style={styles.label}>Edad:</Text>
                    <Text style={styles.value}>{userData.edad}</Text>

                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.value}>{userData.email}</Text>
                </>
            ) : (
                <Text>No se encontraron datos.</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    value: {
        fontSize: 16,
        marginBottom: 15,
    },
});

export default App;