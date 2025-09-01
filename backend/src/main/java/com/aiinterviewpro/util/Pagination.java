package com.aiinterviewpro.util;

import org.springframework.data.domain.*;

import java.util.Collections;
import java.util.List;

public class Pagination {
    public static Pageable createPageRequest(
            Integer page, Integer size, String sortBy, String direction) {

        int pageNumber = (page != null && page >= 0) ? page : 0;
        int pageSize = (size != null && size > 0) ? size : 10;

        Sort sort = Sort.by("departmentName").ascending();  // default

        if (sortBy != null && !sortBy.isBlank()) {
            if ("desc".equalsIgnoreCase(direction)) {
                sort = Sort.by(sortBy).descending();
            } else {
                sort = Sort.by(sortBy).ascending();
            }
        }

        return PageRequest.of(pageNumber, pageSize, sort);
    }
    public static <T> Page<T> paginateList(List<T> list, Pageable pageable) {
        int total = list.size();
        int start = (int) pageable.getOffset();
        int end = Math.min(start + pageable.getPageSize(), total);

        if (start >= total) {
            return new PageImpl<>(Collections.emptyList(), pageable, total);
        }

        List<T> content = list.subList(start, end);
        return new PageImpl<>(content, pageable, total);
    }
}

