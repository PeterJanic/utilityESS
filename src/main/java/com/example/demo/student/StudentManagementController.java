package com.example.demo.student;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("management/api/v1/students")
public class StudentManagementController {

    private static final List<Student> STUDENTS = Arrays.asList(
            new Student(1, "JP"),
            new Student(2, "Seth"),
            new Student(3, "JC")

    );

    //  hasRole('ROLE_') hasAnyRole('ROLE_') hasAuthority('permission') hasAnyAuthority('permission')

    @GetMapping     //to tell spring for GET
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_ADMINTRAINEE')")
    public List<Student> getAllStudents(){
        System.out.println("getAllStudents");
        return STUDENTS;
    }

    @PostMapping    //to tell spring to add new resource for POST and its body
    @PreAuthorize("hasAuthority('student:write')")
    public void registerNewStudent(@RequestBody Student student){
        System.out.println("registerNewStudent");
        System.out.println(student);
//        getAllStudents().add(new Student(student.getStudentId(), student.getStudentName()));
    }

    @DeleteMapping(path = "{studentId}")     //to tell spring to delete we add mapping and saying from where comes Path
    @PreAuthorize("hasAuthority('student:write')")
    public void deleteStudent(@PathVariable("studentId") Integer studentId){
        System.out.println("deleteStudent");
//        getAllStudents().remove(studentId);
        System.out.println(studentId);
    }

    @PutMapping(path = "{studentId}")       //same for UPDATE/PUT
    @PreAuthorize("hasAuthority('student:write')")
    public void updateStudent(@PathVariable("studentId") Integer studentId, @RequestBody Student student){
        System.out.println("updateStudent");
        System.out.println(String.format("%s %s", studentId, student));
    }
}
