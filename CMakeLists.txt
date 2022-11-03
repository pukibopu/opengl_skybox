cmake_minimum_required(VERSION 3.23)
project(skybox)

set(CMAKE_CXX_STANDARD 11)
include_directories(/Users/j10j0/Desktop/openGL_cpp/include)
add_executable(skybox main.cpp /Users/j10j0/Desktop/openGL_cpp/libs/glad.c)
target_link_libraries(skybox /Users/j10j0/Desktop/openGL_cpp/libs/libassimp.5.2.4.dylib
        /Users/j10j0/Desktop/openGL_cpp/libs/libglfw.3.dylib)