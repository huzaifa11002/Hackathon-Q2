import React from 'react'

export default async function Page() {
    const url = await fetch("http://localhost:3000/api/userdata")
    const data = await url.json()
    console.log(data)
    return (
        <div>page</div>
    )
}