- FirstFragment
  ```kotlin
  package ex.app.hwan_umc_week3

  import android.os.Bundle
  import android.view.LayoutInflater
  import android.view.View
  import android.view.ViewGroup
  import androidx.fragment.app.Fragment
  import ex.app.hwan_umc_week3.databinding.FragmentFirstBinding

  class FirstFragment: Fragment() {
      private lateinit var viewBinding: FragmentFirstBinding

      override fun onCreateView(
          inflater: LayoutInflater,
          container: ViewGroup?,
          savedInstanceState: Bundle?
      ): View {
          viewBinding = FragmentFirstBinding.inflate(layoutInflater)
          return viewBinding.root
      }
  }
  ```
- SecondFragment
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

          viewBinding.secondButton.setOnClickListener {
              val intent = Intent(this, ThirdActivity::class.java)
              startActivity(intent)
          }
      }
  }
  ```
- SecondActivity
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

          viewBinding.secondButton.setOnClickListener {
              val intent = Intent(this, ThirdActivity::class.java)
              startActivity(intent)
          }
      }
  }
  ```
- ThirdActivity

  ```kotlin
  package ex.app.hwan_umc_week3

  import androidx.appcompat.app.AppCompatActivity
  import android.os.Bundle
  import ex.app.hwan_umc_week3.databinding.ActivityThirdBinding

  class ThirdActivity : AppCompatActivity() {
      private lateinit var viewBinding : ActivityThirdBinding

      override fun onCreate(savedInstanceState: Bundle?) {
          super.onCreate(savedInstanceState)
          viewBinding = ActivityThirdBinding.inflate(layoutInflater)
          setContentView(viewBinding.root)

          supportFragmentManager
              .beginTransaction()
              .replace(viewBinding.frame.id, FirstFragment())
              .commitAllowingStateLoss()

          viewBinding.fragmentBtn1.setOnClickListener{
              supportFragmentManager
                  .beginTransaction()
                  .replace(viewBinding.frame.id, FirstFragment())
                  .commitAllowingStateLoss()
          }

          viewBinding.fragmentBtn2.setOnClickListener{
              supportFragmentManager
                  .beginTransaction()
                  .replace(viewBinding.frame.id, SecondFragment())
                  .commitAllowingStateLoss()
          }
      }
  }
  ```

- fragment_first.xml
  ```xml
  <?xml version="1.0" encoding="utf-8"?>
  <androidx.constraintlayout.widget.ConstraintLayout
      xmlns:android="http://schemas.android.com/apk/res/android"
      xmlns:app="http://schemas.android.com/apk/res-auto"
      xmlns:tools="http://schemas.android.com/tools"
      android:layout_width="match_parent"
      android:layout_height="match_parent">

      <TextView
          android:id="@+id/textView"
          android:layout_width="wrap_content"
          android:layout_height="wrap_content"
          android:text="Fragment 1"
          android:textSize="50sp"
          app:layout_constraintBottom_toBottomOf="parent"
          app:layout_constraintEnd_toEndOf="parent"
          app:layout_constraintStart_toStartOf="parent"
          app:layout_constraintTop_toTopOf="parent" />
  </androidx.constraintlayout.widget.ConstraintLayout>
  ```
- fragment_second.xml
  ```xml
  <?xml version="1.0" encoding="utf-8"?>
  <androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
      xmlns:app="http://schemas.android.com/apk/res-auto"
      xmlns:tools="http://schemas.android.com/tools"
      android:layout_width="match_parent"
      android:layout_height="match_parent">

      <TextView
          android:id="@+id/textView2"
          android:layout_width="wrap_content"
          android:layout_height="wrap_content"
          android:text="Fragment 2"
          android:textSize="50sp"
          app:layout_constraintBottom_toBottomOf="parent"
          app:layout_constraintEnd_toEndOf="parent"
          app:layout_constraintStart_toStartOf="parent"
          app:layout_constraintTop_toTopOf="parent" />
  </androidx.constraintlayout.widget.ConstraintLayout>
  ```
