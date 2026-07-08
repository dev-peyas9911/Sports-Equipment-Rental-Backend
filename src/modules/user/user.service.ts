import { prisma } from "../../lib/prisma";

const updateMyProfileInDB = async (userId : string, payload : any) => {
    const {name, email, phone, address} = payload;

    const updatedUser = await prisma.user.update({
        where : { id : userId},

        data : {
            name,
            email,
            phone,
            address
        },

        omit : {
            password : true
        },
    })

    return updatedUser;
}

export const userService = {
    updateMyProfileInDB
}