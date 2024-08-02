import 'package:flutter/material.dart';
import 'package:inkwell/palette.dart';
import 'package:inkwell/screens/login_screen.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        scaffoldBackgroundColor: Palette.blue,
      ),
      home: const Scaffold(
        body: LoginScreen(),
      ),
    );
  }
}
