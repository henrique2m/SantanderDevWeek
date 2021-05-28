package com.example.santanderdevweek.ui

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.view.Menu
import android.view.MenuItem
import android.widget.TextView
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProvider
import com.example.santanderdevweek.R
import com.example.santanderdevweek.data.Account


class MainActivity : AppCompatActivity() {
    private lateinit var mainViewModel: MainViewModel

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        setSupportActionBar(findViewById(R.id.toolbar))

        mainViewModel = ViewModelProvider(this).get(MainViewModel::class.java)

        loadAccountClient()

    }

    private fun loadAccountClient() {
        mainViewModel.loadAccountClient().observe(this, Observer {
            result -> bindOnView(result)
        })
    }

    private fun bindOnView(account : Account){
        findViewById<TextView>(R.id.tv_agency).text = "Ag " + account.agency
        findViewById<TextView>(R.id.tv_balance).text =  account.balance
        findViewById<TextView>(R.id.tv_current_account).text = account.number
        findViewById<TextView>(R.id.tv_balance_limit_value).text = account.limit
        findViewById<TextView>(R.id.tv_user).text = "Olá, " + account.client.name
        findViewById<TextView>(R.id.tv_card_finish_value).text = account.card.accountNumber
    }


    override fun onCreateOptionsMenu(menu: Menu?): Boolean {
        val inflate = menuInflater
        inflate.inflate(R.menu.main_menu, menu)
        return true
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        return when (item.itemId) {
            R.id.item_one -> {
                Log.d("CLICK", "User click!")
                true
            }
            else  -> super.onOptionsItemSelected(item)
        }

    }
}