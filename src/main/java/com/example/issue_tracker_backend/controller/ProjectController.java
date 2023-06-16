package com.example.issue_tracker_backend.controller;

import com.example.issue_tracker_backend.dtos.TicketDto;
import com.example.issue_tracker_backend.model.Project;
import com.example.issue_tracker_backend.model.Ticket;
import com.example.issue_tracker_backend.service.ProjectService;
import com.example.issue_tracker_backend.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping()
public class ProjectController {

    private final TicketService ticketService;
    private final ProjectService projectService;

    @Autowired
    public ProjectController(final TicketService ticketService, ProjectService projectService) {
        this.ticketService = ticketService;
        this.projectService = projectService;
    }

    @GetMapping("private/api/projects/issues/{id}")
    public ResponseEntity<List<TicketDto>> getTickets(@PathVariable("id") String title) {
        List<Ticket> tickets = ticketService.findAllTicketsByProject(title);
        ArrayList<TicketDto> ticketsDto = new ArrayList<TicketDto>();
        ticketsDto.ensureCapacity(tickets.size());
        for (Ticket ticket : tickets) {
            ticketsDto.add(ticketService.entityToDto(ticket));
        }
        return new ResponseEntity<>(ticketsDto, HttpStatus.OK);
    }

    @GetMapping("projects/all")
    ResponseEntity<List<Project>> getAllProjects() {
        return new ResponseEntity<>(projectService.getAllProjects(), HttpStatus.OK);
    }
}
