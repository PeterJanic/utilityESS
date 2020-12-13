package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class TemplateController {

    @GetMapping("/login")    //login.html mapping
    public String getLoginView(){
        return "login";
    }

    @GetMapping("/courses")    //courses.html mapping
    public String getCourses(){
        return "courses";
    }
}
