import React, { useEffect, useState } from 'react'
import { Button} from "reactstrap";

export default function AddFav() {

    const[fav, setfav]= useState([]);

    return (
        <div>
            <Button variant="secondary" >+</Button>
        </div>
    )
}
