package com.example.santanderdevweek.ui

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import com.example.santanderdevweek.data.Account
import com.example.santanderdevweek.data.fakeDadabase.FakeDatabase

class MainViewModel : ViewModel() {
    private val mutableLiveData: MutableLiveData<Account> = MutableLiveData()

    fun loadAccountClient()  : LiveData<Account> {
        mutableLiveData.value = FakeDatabase().getLocalData()

        return  mutableLiveData
    }
}