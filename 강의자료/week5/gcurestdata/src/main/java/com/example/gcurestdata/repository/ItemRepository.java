package com.example.gcurestdata.repository;

import com.example.gcurestdata.domain.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "item", path="item")
public interface ItemRepository extends JpaRepository<Item, Long> {
}
