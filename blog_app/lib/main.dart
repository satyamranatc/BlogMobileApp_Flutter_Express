import 'package:flutter/material.dart';
import 'screens/HomePage.dart';
import 'screens/BlogPage.dart';
import 'screens/AdminPage.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: MainScreen(),
    );
  }
}

class MainScreen extends StatefulWidget {
  const MainScreen({super.key});

  @override
  State<MainScreen> createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {
  int _currentIndex = 0;

  final List<Widget> _screens = const [
    HomePage(),
    BlogPage(),
    AdminPage(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body:_screens[_currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        onTap: (index){
          setState(() {
            _currentIndex = index;
          });
      },
      items: [
        BottomNavigationBarItem(icon: Icon(Icons.home_sharp), label: "Home"),
        BottomNavigationBarItem(icon: Icon(Icons.book_sharp), label: "Blog"),
        BottomNavigationBarItem(icon: Icon(Icons.admin_panel_settings_sharp), label: "Admin"),
      ]
    ));
  }

}
