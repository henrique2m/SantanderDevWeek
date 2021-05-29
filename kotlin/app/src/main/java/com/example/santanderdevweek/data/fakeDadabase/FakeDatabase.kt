package com.example.santanderdevweek.data.fakeDadabase

import com.example.santanderdevweek.data.Account
import com.example.santanderdevweek.data.Card
import com.example.santanderdevweek.data.Client

class FakeDatabase {

    fun getLocalData() : Account {
        val client = Client("Henrique")
        val card = Card("0000")

        return Account(
            "Cc 0109795-4",
            "2021",
            "R$ 3000,00",
            "R$ 1000,00",
            client,
            card
        )
    }
}