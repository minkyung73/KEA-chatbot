package gcu.backend.jpa_example.controller;


import gcu.backend.jpa_example.domain.Item;
import gcu.backend.jpa_example.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class ItemController {

    private final ItemRepository itemRepository;

    @PostMapping("/api/item")
    public String add(@RequestBody Item item) {
        itemRepository.save(item);
        return "update OK";
    }

    @GetMapping("/api/item")
    public List<Item> get(){
        return itemRepository.findAll();
    }
    @GetMapping("/api/item/{id}")
    public Optional<Item> getId(@PathVariable("id") Long id){
        return itemRepository.findById(id);
    }

}
