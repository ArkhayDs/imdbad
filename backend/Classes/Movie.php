<?php

class Movie
{
    private int $id;
    private int $authorId;
    private string $title;
    private string $datesortie;
    private string $review;

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param int $id
     * @return Movie
     */
    public function setId(int $id): Movie
    {
        $this->id = $id;
        return $this;
    }

    /**
     * @return int
     */
    public function getAuthorId(): int
    {
        return $this->authorId;
    }

    /**
     * @param int $authorId
     * @return Movie
     */
    public function setAuthorId(int $authorId): Movie
    {
        $this->authorId = $authorId;
        return $this;
    }

    /**
     * @return string
     */
    public function getDate(): string
    {
        return $this->datesortie;
    }

    /**
     * @param string $date
     * @return Movie
     */
    public function setDate(string $datesortie): Movie
    {
        $this->datesortie = $datesortie;
        return $this;
    }

    /**
     * @return string
     */
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * @param string $title
     * @return Movie
     */
    public function setTitle(string $title): Movie
    {
        $this->title = $title;
        return $this;
    }

    /**
     * @return string
     */
    public function getReview(): string
    {
        return $this->review;
    }

    /**
     * @param string $review
     * @return Movie
     */
    public function setContent(string $review): Movie
    {
        $this->review = $review;
        return $this;
    }


}
