# Websocket Gateway

Mediator between "Client" front-end application and "Monolith MVP" back-end. Based on Socket.IO library and Redis.

---

## Responsibilities

At the moment it also might implements the "Backend For Frontend" logic (temporary for MVP phase).

It is supposed to be behind a reverse proxy.

---

## Scaling

Websocket Gateway implements [Redis adapter](https://socket.io/docs/v4/redis-adapter/) and is ready to scale.

---

## Routing

### Fight Registration

**loadFightApplications**

```mermaid
sequenceDiagram
    participant Client
    participant WS Gateway
    participant Monolith MVP
    Client->>WS Gateway: loadFightApplications
    WS Gateway-->>Monolith MVP: GET /fight-registration/applications
    Monolith MVP-->>WS Gateway: fight applications
    WS Gateway->>Client: fightApplicationsLoaded
```

---

**loadFightApplication**

```mermaid
sequenceDiagram
    participant Client
    participant WS Gateway
    participant Monolith MVP
    Client->>WS Gateway: loadFightApplication
    WS Gateway-->>Monolith MVP: GET /fight-registration/applications/:fightApplicationId
    Monolith MVP-->>WS Gateway: fight application
    WS Gateway->>Client: fightApplicationLoaded
```

---

**removeFightApplication**

```mermaid
sequenceDiagram
    participant Client
    participant WS Gateway
    participant Monolith MVP
    Client->>WS Gateway: removeFightApplication
    WS Gateway-->>Monolith MVP: DELETE /fight-registration/applications/:fightApplicationId
    Monolith MVP-->>WS Gateway: fight application
    WS Gateway->>Client: fightApplicationRemoved
    WS Gateway->>Client: profileUpdated (broadcast)
```

---

**createFightApplication**

```mermaid
sequenceDiagram
    participant Client
    participant WS Gateway
    participant Monolith MVP
    Client->>WS Gateway: createFightApplication
    WS Gateway-->>Monolith MVP: POST /fight-registration/applications
    Monolith MVP-->>WS Gateway: fight application
    WS Gateway->>Client: fightApplicationCreated
    WS Gateway->>Client: profileUpdated
```

---

**addPlayerToFightApplication**

```mermaid
sequenceDiagram
    participant Client
    participant WS Gateway
    participant Monolith MVP
    Client->>WS Gateway: addPlayerToFightApplication
    WS Gateway-->>Monolith MVP: POST /fight-registration/applications/:fightApplicationId/teams/:teamId/players
    Monolith MVP-->>WS Gateway: player
    WS Gateway->>WS Gateway: Create / join room with ":fightApplicationId" name
    WS Gateway->>Client: fightApplicationUpdated (broadcast)
    WS Gateway->>Client: profileUpdated (broadcast)
```

---

**removePlayerFromFightApplication**

```mermaid
sequenceDiagram
    participant Client
    participant WS Gateway
    participant Monolith MVP
    Client->>WS Gateway: removePlayerFromFightApplication
    WS Gateway-->>Monolith MVP: DELETE /fight-registration/applications/:fightApplicationId/teams/:teamId/players/:playerId
    Monolith MVP-->>WS Gateway: player
    WS Gateway->>Client: playerFromFightApplicationRemoved
    WS Gateway->>Client: fightApplicationUpdated (broadcast)
    WS Gateway->>Client: profileUpdated
    WS Gateway->>WS Gateway: Leave room with ":fightApplicationId" name
```

---

### Fight

**initializeFight**

```mermaid
sequenceDiagram
    participant Client
    participant WS Gateway
    participant Monolith MVP
    Client->>WS Gateway: initializeFight
    WS Gateway-->>Monolith MVP: GET /fights/fight/:fightId
    Monolith MVP-->>WS Gateway: fight
    WS Gateway->>WS Gateway: Create / join room with ":fightId" name
    WS Gateway->>Client: fightInitialized
```

---

**loadFightRound**

```mermaid
sequenceDiagram
    participant Client
    participant WS Gateway
    participant Monolith MVP
    Client->>WS Gateway: loadFightRound
    WS Gateway-->>Monolith MVP: GET /fight/fights/:fightId/rounds/:roundId
    Monolith MVP-->>WS Gateway: round
    alt normal round
      WS Gateway->>Client: fightRoundLoaded
    else expired round
      WS Gateway-->>Monolith MVP: PUT /fight/fights/:fightId/rounds/:roundId
      Monolith MVP-->>WS Gateway: next round
      WS Gateway->>Client: newFightRoundCreated
    end
```

---

**makeTurn**

```mermaid
sequenceDiagram
    participant Client
    participant WS Gateway
    participant Monolith MVP
    Client->>WS Gateway: makeTurn
    WS Gateway-->>Monolith MVP: POST /fight/fights/:fightId/rounds/:roundId/turns
    Monolith MVP-->>WS Gateway: turn
    WS Gateway->>Client: turnMade
```

---

### Profile

**loadProfile**

```mermaid
sequenceDiagram
    participant Client
    participant WS Gateway
    participant Monolith MVP
    Client->>WS Gateway: loadProfile
    WS Gateway-->>Monolith MVP: GET /profile/:profileId
    Monolith MVP-->>WS Gateway: profile
    WS Gateway->>Client: profileLoaded
```

---

### Error messages

Each event can fail!

```mermaid
sequenceDiagram
    participant Client
    participant WS Gateway
    participant Monolith MVP
    Client-->>WS Gateway: <<some event>>
    WS Gateway->>WS Gateway: Some error happened
    WS Gateway->>Client: error
```
