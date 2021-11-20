import React from "react";
import { ProtectedLayout } from 'ui/components/ProtectedLayout'
import { ApiService } from "data/services/ApiServices";
import axios from "axios";

export default function Profile() {

    return (
        <ProtectedLayout>
            <div>
                <h1>profile</h1>
                <p></p>

            </div>
        </ProtectedLayout>
    )
}