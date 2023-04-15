package gcu.backend.carlist;
import lombok.Getter;

import java.util.Date;

@Getter
public class User {
    private Integer id;
    private String name;
    private String company;
    private Integer price;

    public User(Integer id, String name, String company, Integer price){
        this.id = id;
        this.name = name;
        this.company = company;
        this.price = price;
    }
}
