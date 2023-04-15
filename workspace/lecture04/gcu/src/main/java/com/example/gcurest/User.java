package com.example.gcurest;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import lombok.Getter;
import lombok.ToString;

import java.util.Date;
@Getter

public class User {
    private Integer id;
    private String name;
    private Date dob;

    public User(Integer id, String name, Date dob) {
        this.id = id;
        this.name = name;
        this.dob = dob;
    }

}
