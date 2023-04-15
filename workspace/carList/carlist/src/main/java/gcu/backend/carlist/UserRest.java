package gcu.backend.carlist;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Date;

@RestController
public class UserRest {
    @PostMapping("/api/users")
    public User user() {
        System.out.println("UserApicontroller start...");
        User user = new User(1, "Gachon", "Hyundai", 6000);

        return user;
    }
}
