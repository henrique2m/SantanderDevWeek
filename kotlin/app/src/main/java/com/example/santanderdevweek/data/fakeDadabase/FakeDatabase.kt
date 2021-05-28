package com.example.santanderdevweek.data.fakeDadabase

import com.example.santanderdevweek.data.Account
import com.example.santanderdevweek.data.Card
import com.example.santanderdevweek.data.Client

class FakeDatabase {

    fun getLocalData() : Account {
        val client = Client("Henrique")
        val card = Card("62234531")

        return Account(
            "445567-6",
            "6552-4",
            "R$ 3000,00",
            "R$ 1000,00",
            client,
            card
        )
    }
}