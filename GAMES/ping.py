import pygame
import random

pygame.init()

# Game variables
gameWinH = 600
gameWinW = 1200
gameRunning = True
gameOver = False
startDelay = False
lastScoreTime = 0
paused = False  # Added paused variable

# Window settings
screen = pygame.display.set_mode((gameWinW, gameWinH))
pygame.display.set_caption("Ping X Pong")

# Players
leftPlayerRect = pygame.Rect(30, gameWinH // 2 - 50, 10, 100)
rightPlayerRect = pygame.Rect(gameWinW - 40, gameWinH // 2 - 50, 10, 100)
leftPlayerScore = 0
rightPlayerScore = 0

# Ball settings
ball = pygame.Rect(gameWinW // 2 - 15, gameWinH // 2 - 15, 30, 30)
ballSpeedX = 10 * random.choice((1, -1))
ballSpeedY = 10 * random.choice((1, -1))

clock = pygame.time.Clock()
font = pygame.font.SysFont(None, 48)

def show_text(text, x, y):
    text_surface = font.render(text, True, (255, 255, 255))
    text_rect = text_surface.get_rect(center=(x, y))
    screen.blit(text_surface, text_rect)

# The game loop
while gameRunning:
    currentTime = pygame.time.get_ticks()

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            gameRunning = False

        # Added pause and resume functionality
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_p:
                paused = not paused

    # If paused, skip the rest of the loop
    if paused:
        clock.tick(10)  # Lowering the frame rate when paused to reduce CPU usage
        continue

    keys = pygame.key.get_pressed()
    if keys[pygame.K_w] and leftPlayerRect.top > 0:
        leftPlayerRect.y -= 10
    if keys[pygame.K_s] and leftPlayerRect.bottom < gameWinH:
        leftPlayerRect.y += 10
    if keys[pygame.K_UP] and rightPlayerRect.top > 0:
        rightPlayerRect.y -= 10
    if keys[pygame.K_DOWN] and rightPlayerRect.bottom < gameWinH:
        rightPlayerRect.y += 10

    if not gameOver and not startDelay:
        ball.x += ballSpeedX
        ball.y += ballSpeedY

        if ball.top <= 0 or ball.bottom >= gameWinH:
            ballSpeedY *= -1
        if ball.colliderect(leftPlayerRect) or ball.colliderect(rightPlayerRect):
            ballSpeedX *= -1
        if ball.left <= 0:
            rightPlayerScore += 1
            if rightPlayerScore >= 5:
                gameOver = True
            else:
                ball.center = (gameWinW // 2, gameWinH // 2)
                ballSpeedX = 0
                ballSpeedY = 0
                startDelay = True
                lastScoreTime = currentTime
        if ball.right >= gameWinW:
            leftPlayerScore += 1
            if leftPlayerScore >= 5:
                gameOver = True
            else:
                ball.center = (gameWinW // 2, gameWinH // 2)
                ballSpeedX = 0
                ballSpeedY = 0
                startDelay = True
                lastScoreTime = currentTime

    if startDelay:
        if currentTime - lastScoreTime >= 1000:  # 1 second delay
            ballSpeedX = 15 * random.choice((1, -1))
            ballSpeedY = 15 * random.choice((1, -1))
            startDelay = False

    screen.fill((0, 0, 0))
    pygame.draw.rect(screen, (255, 255, 255), leftPlayerRect)
    pygame.draw.rect(screen, (255, 255, 255), rightPlayerRect)
    pygame.draw.ellipse(screen, (255, 255, 255), ball)

    show_text(f"Left: {leftPlayerScore} | Right: {rightPlayerScore}", gameWinW // 2, 30)

    if gameOver:
        show_text("Game Over! Press Space to Play Again", gameWinW // 2, gameWinH // 2)
        if keys[pygame.K_SPACE]:
            gameOver = False
            leftPlayerScore = 0
            rightPlayerScore = 0
            ball.center = (gameWinW // 2, gameWinH // 2)

    pygame.display.update()
    clock.tick(60)

pygame.quit()
