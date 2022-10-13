- MainActivity.kt
  ```kotlin
  package ex.app.hwan_umc_week3

  import android.content.Intent
  import androidx.appcompat.app.AppCompatActivity
  import android.os.Bundle
  import ex.app.hwan_umc_week3.databinding.ActivityMainBinding

  class MainActivity : AppCompatActivity() {
      private lateinit var viewBinding: ActivityMainBinding

      override fun onCreate(savedInstanceState: Bundle?) {
          super.onCreate(savedInstanceState)
          viewBinding = ActivityMainBinding.inflate(layoutInflater)
          setContentView(viewBinding.root)

          viewBinding.mainButton.setOnClickListener{
              val intent = Intent(this, SecondActivity::class.java)
              intent.putExtra("text", viewBinding.mainEditText.getText().toString())

              startActivity(intent)
          }
      }
  }
  ```
- SecondActivity.kt
  ```kotlin
  package ex.app.hwan_umc_week3

  import android.content.Intent
  import androidx.appcompat.app.AppCompatActivity
  import android.os.Bundle
  import ex.app.hwan_umc_week3.databinding.ActivitySecondBinding

  class SecondActivity : AppCompatActivity() {
      private lateinit var viewBinding : ActivitySecondBinding

      override fun onCreate(savedInstanceState: Bundle?) {
          super.onCreate(savedInstanceState)
          viewBinding = ActivitySecondBinding.inflate(layoutInflater)
          setContentView(viewBinding.root)

          val extras =intent.extras
  val data = extras!!["text"] as String

          viewBinding.secondText.text= data
      }
  }
  ```
- activity_main.xml
  ```xml
  <?xml version="1.0" encoding="utf-8"?>
  <androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
      xmlns:app="http://schemas.android.com/apk/res-auto"
      xmlns:tools="http://schemas.android.com/tools"
      android:layout_width="match_parent"
      android:layout_height="match_parent"
      tools:context=".MainActivity">

      <EditText
          android:id="@+id/main_EditText"
          android:layout_width="wrap_content"
          android:layout_height="200px"
          android:paddingLeft="200px"
          android:paddingRight="200px"
          android:background="@color/purple_200"
          android:hint="내용을 입력하세요"
          app:layout_constraintBottom_toBottomOf="parent"
          app:layout_constraintEnd_toEndOf="parent"
          app:layout_constraintHorizontal_bias="0.498"
          app:layout_constraintStart_toStartOf="parent"
          app:layout_constraintTop_toTopOf="parent"
          app:layout_constraintVertical_bias="0.358" />

      <Button
          android:id="@+id/main_Button"
          android:layout_width="600px"
          android:layout_height="200px"
          android:text="Button"
          app:layout_constraintBottom_toBottomOf="parent"
          app:layout_constraintEnd_toEndOf="parent"
          app:layout_constraintStart_toStartOf="parent"
          app:layout_constraintTop_toBottomOf="@+id/main_EditText"
          app:layout_constraintVertical_bias="0.229" />

  </androidx.constraintlayout.widget.ConstraintLayout>
  ```
- activity_second.xml
  ```xml
  <?xml version="1.0" encoding="utf-8"?>
  <androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
      xmlns:app="http://schemas.android.com/apk/res-auto"
      xmlns:tools="http://schemas.android.com/tools"
      android:layout_width="match_parent"
      android:layout_height="match_parent"
      tools:context=".SecondActivity">

      <TextView
          android:id="@+id/secondText"
          android:layout_width="wrap_content"
          android:layout_height="wrap_content"
          android:text="Second Text View"
          android:textSize="100px"
          android:textColor="@color/purple_200"
          app:layout_constraintBottom_toBottomOf="parent"
          app:layout_constraintEnd_toEndOf="parent"
          app:layout_constraintStart_toStartOf="parent"
          app:layout_constraintTop_toTopOf="parent" />
  </androidx.constraintlayout.widget.ConstraintLayout>
  ```
