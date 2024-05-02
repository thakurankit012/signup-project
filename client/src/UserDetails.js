import React, { useState, useEffect } from 'react';
function UserDetails({ userDetails }) {
    const [userDetail, setUserDetail] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetch('http://localhost:8000/api/user/loggeduser', { headers: { Authorization: `Bearer ${token}` } })
                .then(response => response.json())
                .then(data => {
                    setUserDetail(data.user);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.error('details fetch:', error);
                    setIsLoading(false);
                });
        }
    }, []);
    if (isLoading) {
        return <div>Loading user details...</div>;
    }
    return (
        <div className="container">
            <h2>Your Details</h2>
            <table className="table">
                <tbody>
                    <tr>
                        <td><strong>Full Name:</strong></td>
                        <td>{userDetail.name}</td>
                    </tr>
                    <tr>
                        <td><strong>Email:</strong></td>
                        <td>{userDetail.email}</td>
                    </tr>
                    <tr>
                        <td><strong>Mobile Number:</strong></td>
                        <td>{userDetail.mobile}</td>
                    </tr>
                    <tr>
                        <td><strong>Place:</strong></td>
                        <td>{userDetail.place}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default UserDetails;
