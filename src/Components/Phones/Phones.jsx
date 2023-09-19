import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Audio } from 'react-loader-spinner'


const Phones = () => {
    const [phones, setPhones] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        //     fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //         .then(res => res.json())
        //         .then(data => setPhones(data.data))
        // }, [])
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(res => {
                const phones = res.data.data;
                const phonesWithFakeData = phones.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1]),
                    }
                    return obj;
                })
                setPhones(phonesWithFakeData);
                setLoading(false)
            }, [])
    }, [])

    return (
        <div>
            {loading && <Audio
                height="80"
                width="80"
                radius="9"
                color='green'
                ariaLabel='three-dots-loading'
                wrapperStyle
                wrapperClass
            />}

            <h2 className="text-5xl">{phones.length}</h2>
            <BarChart width={600} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis dataKey="price" />
            </BarChart>
        </div>
    );
};

export default Phones;