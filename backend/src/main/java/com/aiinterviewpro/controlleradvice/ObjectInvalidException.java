package com.aiinterviewpro.controlleradvice;

public class ObjectInvalidException extends RuntimeException {

    public ObjectInvalidException(String message) {
        super(message);
    }

    public ObjectInvalidException()
    {
    }

}
