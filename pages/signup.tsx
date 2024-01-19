import { supabase } from '../lib/supabase'
import React, { useState } from 'react';
import Link from 'next/link';
const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const { data: { user }, error } = await supabase.auth.signUp({ email, password });
            if (error) throw error;

            // Handle successful signup:
            console.log('User signed up:', user);
            // Redirect to another page or display a success message
        } catch (error) {
            console.error('Error signing up:', error as Error['message']);
            // Display an error message to the user
        }
    };

    return (
        <div style={{background:'orange',height:'100vh',textAlign:'center'}}>
            <form onSubmit={handleSignup}>
                <label htmlFor="email">Enter Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label htmlFor="email">Create a  password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Sign Up</button>
            </form>
            <Link href={'/'} style={{textDecoration:'none'}}>
            Home
            </Link>
        </div>

    );
};

export default SignupPage;

