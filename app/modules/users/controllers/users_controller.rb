class UsersController < ApplicationController
  include UsersHelper

  before_action :set_user, only: [:show, :edit]

  # GET /users or /users.json
  def index
    @users = list_users_service.execute
  end

  # GET /users/1 or /users/1.json
  def show

  end

  # GET /users/new
  def new
    @user = create_users_service.execute
  end

  # GET /users/1/edit
  def edit

  end

  # POST /users or /users.json
  def create
    @user = create_users_service.execute(user_params(params))

    respond_to do |format|
      if @user.save
        format.html { redirect_to user_url(@user), notice: "User was successfully created." }
        format.json { render :show, status: :created, location: @user }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /users/1 or /users/1.json
  def update
    respond_to do |format|
      if update_users_service.execute(params)
        format.html { redirect_to user_url(@user), notice: "User was successfully updated." }
        format.json { render :show, status: :ok, location: @user }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1 or /users/1.json
  def destroy
    delete_users_service.execute(params[:id])

    respond_to do |format|
      format.html { redirect_to users_url, notice: "User was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private

    def set_user
      @user = find_users_service.execute(params[:id])
    end

    def list_users_service
      @list_users_service ||= ListUsersService.new
    end

    def find_users_service
      @find_users_service ||= FindUsersService.new
    end

    def create_users_service
      @create_users_service ||= CreateUsersService.new
    end

    def delete_users_service
      @delete_users_service ||= DeleteUsersService.new
    end

    def update_users_service
      @update_users_service ||= UpdateUsersService.new
    end

end
