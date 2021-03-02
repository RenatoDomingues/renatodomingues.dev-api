
import React from 'react'
import getUser from '../../utils/getUser'

const apiGetUser = async(req, res) => {

    const data = await getUser('renatodomingues')
    //res.send('Testing!')
    res.send(data)
}
export default apiGetUser
